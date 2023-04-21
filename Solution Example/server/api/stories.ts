import axios from "axios";
import { Story } from "../types";
import {
    HACKER_NEWS_API_BASE_URL,
    HACKER_NEWS_API_URL_SUFFIX,
    HACKER_NEWS_STORIES_LIMIT,
} from "./constants";
import { concurencyBalancer, isResponseSuccess } from "./utils";

/**
 *
 * @param useLimit
 * @returns Promise<number[]>
 */
export const getNewStoriesIDs = async (useLimit = false): Promise<number[]> => {
    const url = `${HACKER_NEWS_API_BASE_URL}newstories${HACKER_NEWS_API_URL_SUFFIX}`;
    const response = await axios.get(url);
    if (isResponseSuccess(response) && Array.isArray(response.data)) {
        if (useLimit) {
        const slicedIDs: number[] = response.data.slice(
            0,
            HACKER_NEWS_STORIES_LIMIT
        );
        return slicedIDs;
        } else {
        return response.data;
        }
    }
    return [];
};

/**
 *
 * @param storiesIDs
 * @returns number []
 */
export const getStoriesByIDs = async (
    storiesIDs: number[]
): Promise<Story[]> => {
    const start = Date.now();
    const result = await concurencyBalancer<Story>(50, storiesIDs, getStoryById);

    const end = Date.now();
    console.log("Time took for request: ", (end - start) / 1000);
    return result;
};

/**
 *
 * @param storyID
 * @returns
 */
export const getStoryById = async (storyID: number): Promise<Story | null> => {
    const url = `${HACKER_NEWS_API_BASE_URL}item/${storyID}${HACKER_NEWS_API_URL_SUFFIX}`;
    const response = await axios.get(url);

    if (isResponseSuccess(response)) {
        return response.data;
    }

    return null;
};
