import { url, dribbbleToken } from '../common/const';

export async function fetchShotsList() {
    const path = '/shots';

    const result = await fetch(url + path, {
        method: 'GET',
        headers: {
            Accept: 'json',
            'Content-Type': 'json',
            Authorization: `bearer ${dribbbleToken}`,
        },
    }).then(res => res.json());

    return result;
}
