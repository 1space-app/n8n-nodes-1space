import type {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';
import { userFields, userOperations } from './UserDescription';
import { feedItemFields, feedItemOperations } from './FeedItemDescription';


export class OneSpaceNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: '1Space',
		subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
		name: 'oneSpaceNode',
		group: ['transform'],
		version: 1,
		description: '1Space API',
		defaults: {
			name: '1Space',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'onespaceApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://staging-api.1space.app/api',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Feed/Item',
						value: 'feedItem',
					},
				],
				default: 'user',
			},
			...userOperations,
			...userFields,
			...feedItemOperations,
			...feedItemFields,
		],
	};
}

