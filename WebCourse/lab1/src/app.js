console.log("Hello World!");

import portfolioJson from "./portfolio.json";
import { formatDistanceToNow } from "date-fns";

console.log(portfolioJson);

const state = { portfolio: portfolioJson };

const containerEl = document.getElementById("container");

state.birthday = `${formatDistanceToNow(new Date(state.portfolio.personalInformation.birthday))} old`;

containerEl.textContent = JSON.stringify(state, null, 2);
