import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import './style.css';

const Stats = () => {
	const [stats, setStats] = useState({
		userCount: 0,
		projectCount: 0
	});

	useEffect(() => {
		fetchStats();
	}, []);

	const fetchStats = async () => {
		try {
			const response = await axios.get(
				process.env.REACT_APP_BACKEND_URL + '/api/stats'
			);
			setStats(response.data);
		} catch (error) {
			console.error('Error fetching stats:', error);
		}
	};

	const data = {
		labels: ['Users', 'Projects'],
		datasets: [
			{
				label: 'Total',
				data: [stats.userCount, stats.projectCount],
				backgroundColor: [
					'rgba(75, 192, 192, 0.6)',
					'rgba(153, 102, 255, 0.6)'
				]
			}
		]
	};

	return (
		<div className="stats-page">
			<h1>Admin Stats</h1>
			<div className="stats-chart">
				<Bar data={data} />
			</div>
		</div>
	);
};

export default Stats;
