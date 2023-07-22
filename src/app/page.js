import Header from './header';
import Layout from '@/components/Layout';
import { navLinks } from './global';

export default function Home() {
	return (
		<>
			<Header navLinks={navLinks} />
			<Layout />
		</>
	);
}
