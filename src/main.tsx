import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import bclogo from "@/assets/bclogo.png";

function setFavicon(href: string) {
	try {
		let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
		if (!link) {
			link = document.createElement('link');
			link.rel = 'icon';
			document.getElementsByTagName('head')[0].appendChild(link);
		}
		link.href = href;
	} catch (e) {
		// ignore
	}
}

setFavicon(bclogo);

createRoot(document.getElementById("root")!).render(<App />);
