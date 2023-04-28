/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: [
        {
            label: 'Neutron',
            type: 'category',
            items: [
                'neutron/overview',
                'neutron/build',
                'neutron/contribute',
                {
                    label: 'Modules',
                    type: 'category',
                    items: [
                        {
                            label: 'Interchain Transactions',
                            type: 'category',
                            items: [
                                'neutron/modules/interchain-txs/overview',
                                'neutron/modules/interchain-txs/messages',
                                'neutron/modules/interchain-txs/client',
                                'neutron/modules/interchain-txs/state',
                                'neutron/modules/interchain-txs/events'
                            ]
                        },
                        {
                            label: 'Interchain Queries',
                            type: 'category',
                            items: [
                                'neutron/modules/interchain-queries/overview',
                                'neutron/modules/interchain-queries/messages',
                                'neutron/modules/interchain-queries/client',
                                'neutron/modules/interchain-queries/state',
                                'neutron/modules/interchain-queries/events'
                            ]
                        },
                        {
                            label: 'Transfer',
                            type: 'category',
                            items: [
                                'neutron/modules/transfer/overview',
                                'neutron/modules/transfer/state',
                                'neutron/modules/transfer/messages'
                            ]
                        },
                        {
                            label: 'Contract Manager',
                            type: 'category',
                            items: [
                                'neutron/modules/contract-manager/overview',
                                'neutron/modules/contract-manager/client',
                                'neutron/modules/contract-manager/state'
                            ]
                        },
                        {
                            label: 'Fee Refunder',
                            type: 'category',
                            items: [
                                'neutron/modules/feerefunder/overview',
                                'neutron/modules/feerefunder/client',
                                'neutron/modules/feerefunder/state',
                                'neutron/modules/feerefunder/events'
                            ]
                        },
                        {
                            label: 'Fee Burner',
                            type: 'category',
                            items: [
                                'neutron/modules/feeburner/overview',
                                'neutron/modules/feeburner/client',
                                'neutron/modules/feeburner/state'
                            ]
                        },
                        {
                            label: 'Cron',
                            type: 'category',
                            items: [
                                'neutron/modules/cron/overview',
                                'neutron/modules/cron/client',
                                'neutron/modules/cron/state',
                                'neutron/modules/cron/metrics'
                            ]
                        },
                        {
                            label: '3rd Party Modules',
                            type: 'category',
                            items: [
                                {
                                    type: 'category',
                                    label: 'Osmosis',
                                    items: [
                                        {
                                            type: 'category',
                                            label: 'Token Factory',
                                            items: [
                                                '3rdparty/osmosis/tokenfactory/overview',
                                                '3rdparty/osmosis/tokenfactory/messages'
                                            ]
                                        },
                                        {
                                            type: 'category',
                                            label: 'IBC Hooks',
                                            items: [
                                                '3rdparty/osmosis/ibc-hooks/overview'
                                            ]
                                        }
                                    ],
                                },
                                {
                                    type: 'category',
                                    label: 'Strangelove',
                                    items: [
                                        {
                                            type: 'category',
                                            label: 'Packet Forward Middleware',
                                            items: [
                                                '3rdparty/strangelove/packet-forward-middleware/overview',
                                            ]
                                        }
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Tokenomics',
                    type: 'category',
                    items: [
                        'neutron/tokenomics/overview',
                        {
                            type: 'category',
                            label: 'Reserve',
                            items: [
                                'neutron/tokenomics/reserve/overview',
                                'neutron/tokenomics/reserve/messages',
                                'neutron/tokenomics/reserve/queries'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Treasury',
                            items: [
                                'neutron/tokenomics/treasury/overview',
                                'neutron/tokenomics/treasury/messages',
                                'neutron/tokenomics/treasury/queries'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Distribution',
                            items: [
                                'neutron/tokenomics/distribution/overview',
                                'neutron/tokenomics/distribution/messages',
                                'neutron/tokenomics/distribution/queries'
                            ]
                        },
                        {
                            label: 'Token Generation Event',
                            type: 'category',
                            items: [
                                {
                                    type: 'category',
                                    label: 'Credits',
                                    items: [
                                        'neutron/token-generation-event/credits/overview',
                                        'neutron/token-generation-event/credits/messages',
                                        'neutron/token-generation-event/credits/queries',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Oracle',
                                    items: [
                                        'neutron/token-generation-event/oracle/overview',
                                        'neutron/token-generation-event/oracle/queries',
                                    ]
                                }
                            ],
                        }
                    ]
                },
                {
                    label: 'Neutron DAO',
                    type: 'category',
                    items: [
                        'neutron/dao/overview',
                        'neutron/dao/dao-dao-diff',
                        'neutron/dao/overrules',
                    ],
                },
            ],
        },
        {
            label: 'Relaying',
            type: 'category',
            items: [
                'relaying/ibc-relayer',
                'relaying/icq-relayer',
                'relaying/target-chain',
            ],
        },
        {
            label: 'Tutorials',
            type: 'category',
            items: [
                'tutorials/cosmwasm_ica',
                'tutorials/cosmwasm_icq',
                'tutorials/integration_tests'
            ],
        },
        {
            label: 'Deployed contracts',
            type: 'category',
            items: [
                'deployment/testnet',
            ],
        },
    ]
};

module.exports = sidebars;
