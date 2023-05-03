import { Request, Response } from "express";
import { getNewStoriesIDs, getStoriesByIDs, getStoryById } from "../api";
import { Story } from "../types";
import { storiesTimeSortFunction } from "./utils";

export const getStoriesController = async (req: Request, res: Response) => {
    const storiesIDs: number[] = await getNewStoriesIDs(true);
    const data: Story[] = await getStoriesByIDs(storiesIDs);
    const sortedData = data.sort(storiesTimeSortFunction);
    res.json({ data: sortedData });
};

export const getStoryByIdController = async (req: Request, res: Response) => {
    const storyId = Number(req.params.id);
    if (!storyId) {
        res.send({ data: "Please enter id" });
    }

    const storyInformation = await getStoryById(storyId);

    const comments = await getStoriesByIDs(storyInformation?.kids ?? []);

    const data = {
        story: storyInformation,
        comments,
    };

    res.json({ data });
};
