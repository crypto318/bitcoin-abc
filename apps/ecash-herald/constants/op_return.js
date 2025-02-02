// Copyright (c) 2023 The Bitcoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.
'use strict';
/**
 * op_return.js
 * Constants related to OP_RETURN script
 * https://en.bitcoin.it/wiki/Script
 */
module.exports = {
    opReturnPrefix: '6a',
    opReturnAppPrefixLength: '04',
    opPushDataOne: '4c',
    appPrefixes: {
        '00746162': 'Cashtab Msg',
        '2e786563': 'Alias',
    },
    memo: {
        'prefix': '026d',
        'app': 'memo',
        '01': 'Set name',
        '02': 'Post memo',
        '03': 'Reply to memo',
        '04': 'Like / tip memo',
        '05': 'Set profile text',
        '06': 'Follow user',
        '07': 'Unfollow user',
        '0a': 'Set profile picture',
        '0b': 'Repost memo',
        '0c': 'Post topic message',
        '0d': 'Topic follow',
        '0e': 'Topic unfollow',
        '10': 'Create poll',
        '13': 'Add poll option',
        '14': 'Poll vote',
        '16': 'Mute user',
        '17': 'Unmute user',
        '24': 'Send money',
        '30': 'Sell tokens Spec',
        '31': 'Token buy offer Spec',
        '32': 'Attach token sale signature Spec',
        '35': 'Pin token post',
        '20': 'Link request',
        '21': 'Link accept',
        '22': 'Link revoke',
        '26': 'Set address alias',
    },
};
