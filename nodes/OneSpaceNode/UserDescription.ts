import type { INodeProperties } from 'n8n-workflow';

export const userOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['user'],
            },
        },
        options: [
            {
                name: 'Get Current User​',
                value: 'me',
                description: 'Retrieve the current authenticated user\'s information',
                action: 'Get current user',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/v1/me'
                    }
                }
            },
        ],
        default: 'me',
    },
];

export const userFields: INodeProperties[] = []; 