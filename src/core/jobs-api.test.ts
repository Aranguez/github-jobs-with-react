import API from './jobs-api';
jest.mock('./jobs-api');

it('getJobs', async () => {
    const getJobsSpy = jest.spyOn(API, 'getJobs');

    const data = await API.getJobs('Javascript', 'New York', 'on');
    expect(getJobsSpy).toHaveBeenCalledWith('Javascript', 'New York', 'on');
    expect(getJobsSpy).toHaveBeenCalledTimes(1);
    expect(data).toStrictEqual([{ data: 'data' }]);
})

it('getJob', async () => {
    const getJobsSpy = jest.spyOn(API, 'getJob');

    const data = await API.getJob('2');
    expect(getJobsSpy).toHaveBeenCalledWith('2');
    expect(getJobsSpy).toHaveBeenCalledTimes(1);
    expect(data).toStrictEqual({ data: 'data' });
})

