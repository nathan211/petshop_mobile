import client from '../api/client';

const getCombos = () => client.get('/combos');

const getComboDetails = (comboId) => client.get('/combos/getComboDetails/' + comboId);

export default {
    getCombos,
    getComboDetails,
}