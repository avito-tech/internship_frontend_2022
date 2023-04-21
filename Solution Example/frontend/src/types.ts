export interface Story {
    by?: string
    descendants?: number
    id: number
    kids?: number[]
    score?: number
    time: number
    title?: string
    type: StoryTypes
    url?: string
    parent?: number
    deleted?: boolean
    text?: string
    dead?: boolean
    comments?: Story[]
}

export enum StoryTypes {
    STORY = 'story',
    COMMENT = 'comment',
}

export interface CommentDisplayed extends Story {
    children?: CommentDisplayed[]
}
