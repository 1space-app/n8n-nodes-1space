import type { INodeProperties } from 'n8n-workflow';

export const feedItemOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['feedItem'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                description: 'Get feed item details',
                action: 'Get feed item details',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/v1/feed/item/{{$parameter.itemId}}'
                    }
                }
            },
            {
                name: 'Mark as Read',
                value: 'markAsRead',
                description: 'Mark feed item as read',
                action: 'Mark feed item as read',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/v1/feed/item/{{$parameter.itemId}}/read'
                    }
                }
            },
            {
                name: 'Mark as Unread',
                value: 'markAsUnread',
                description: 'Mark feed item as unread',
                action: 'Mark feed item as unread',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/v1/feed/item/{{$parameter.itemId}}/unread'
                    }
                }
            },
            {
                name: 'Mark as Star',
                value: 'markAsStar',
                description: 'Mark feed item as starred',
                action: 'Mark feed item as starred',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/v1/feed/item/{{$parameter.itemId}}/star'
                    }
                }
            },
            {
                name: 'Mark as Unstar',
                value: 'markAsUnstar',
                description: 'Mark feed item as unstarred',
                action: 'Mark feed item as unstarred',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/v1/feed/item/{{$parameter.itemId}}/unstar'
                    }
                }
            },
        ],
        default: 'get',
    },
];

export const feedItemFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                           Common Field - Item ID                           */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Item ID',
        name: 'itemId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: {
            show: {
                resource: ['feedItem'],
                operation: ['get', 'markAsRead', 'markAsUnread', 'markAsStar', 'markAsUnstar'],
            },
        },
        description: 'The unique ID of the feed item',
    },

    /* -------------------------------------------------------------------------- */
    /*                           Mark as Star - Options                           */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Additional Options',
        name: 'additionalOptions',
        type: 'collection',
        placeholder: 'Add Option',
        default: {},
        displayOptions: {
            show: {
                resource: ['feedItem'],
                operation: ['markAsStar'],
            },
        },
        options: [
            {
                displayName: 'Emit Event',
                name: 'emitEvent',
                type: 'boolean',
                default: true,
                description: 'Whether to emit an event when marking as starred',
                routing: {
                    request: {
                        body: {
                            emitEvent: '={{$value}}'
                        }
                    }
                }
            },
        ]
    },
];