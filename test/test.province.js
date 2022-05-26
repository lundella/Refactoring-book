import Province from '../src/chapter4/Province.js';

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5)
    })
})