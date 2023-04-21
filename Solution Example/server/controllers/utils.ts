import { Story } from "../types"

export const storiesTimeSortFunction = (story1: Story, story2: Story): number => {
    return story2.time - story1.time
}
