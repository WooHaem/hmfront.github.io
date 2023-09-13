import Link from "next/link";

export default function Footer() {
    return <footer className={`border-t border-x rounded-t-2xl text-white text-center py-3 text-sm max-w-7xl mx-auto`}>
			Copyright by&nbsp;
			<Link href="https://hmfront.com" title="hmfront" target="_blank" className="transition text-orange-400 hover:text-orange-200">
				HMfront.com.
			</Link>
			&nbsp;All Rights Reserved.
		</footer>
}