import axios from 'axios';
import * as cheerio from 'cheerio'; // Fixed: import cheerio correctly
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/Apiresponse.js';
import { asynchandling } from '../utils/asynchandling.js';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const CDP_DOCS = {
    segment: 'https://segment.com/docs/',
    mparticle: 'https://docs.mparticle.com/',
    lytics: 'https://docs.lytics.com/',
    zeotap: 'https://docs.zeotap.com/home/en-us/'
};

const fetchDocs = async (url) => {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        return $('body').text().replace(/\s+/g, ' ').trim();
    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return '';
    }
};

const askQuestion = asynchandling(async (req, res) => {
    const { question } = req.body;
    
    if (!question) {
        throw new ApiError(400, 'Question is required');
    }

    let relevantDocs = [];
    for (let [cdp, url] of Object.entries(CDP_DOCS)) {
        if (question.toLowerCase().includes(cdp)) {
            console.log(`Fetching docs for: ${cdp}`);
            relevantDocs.push(await fetchDocs(url));
        }
    }
    
    if (relevantDocs.length === 0) {
        return res.status(200).json(
            new ApiResponse(200, {}, "I can only answer questions related to Segment, mParticle, Lytics, and Zeotap.")
        );
    }
    
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            {
                role: 'system', 
                content: `Answer the following user question based on this documentation: ${relevantDocs.join('\n\n')}`
            },
            {
                role: 'user',
                content: question
            }
        ],
        max_tokens: 300
    });
    console.log(response);  
    
    return res.status(200).json(
        new ApiResponse(200, { answer: response.choices[0].message.content.trim() }, "Question answered successfully")
    );
});

export { askQuestion };