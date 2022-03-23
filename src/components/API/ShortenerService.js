import { Component } from 'react';
import axios from 'axios';

export default class ShortenerService extends Component {
	static async getShortUrl(url) {
		const response = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
        return response.data

	}
}
