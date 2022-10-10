export const topicLoader = async () => {
    const topicsData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const topicsObj = await topicsData.json();
    const topics = topicsObj.data;
    return topics
}