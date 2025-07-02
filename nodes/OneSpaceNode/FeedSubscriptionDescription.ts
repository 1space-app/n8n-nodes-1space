import type { INodeProperties } from 'n8n-workflow';

export const feedSubscriptionOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['feedSubscription'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                description: 'Get feed subscription details',
                action: 'Get feed subscription details',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/v1/feed/subscription/{{$parameter.feedId}}'
                    }
                }
            },
        ],
        default: 'get',
    },
];

export const feedSubscriptionFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                           Common Field - Feed ID                           */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Feed ID',
        name: 'feedId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['feedSubscription'],
                operation: ['get'],
            },
        },
        description: 'The unique ID of the feed subscription',
    },
];
