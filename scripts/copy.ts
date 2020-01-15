import { ncp } from 'ncp';
import { commonAssets, mainAssets } from '../paths';

ncp.limit = 16;

ncp(commonAssets, mainAssets, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('done!');
});