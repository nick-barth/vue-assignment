
# ViriCiti Vue Assignment
---
## Getting Started
```
git clone
npm install
npm run install-client
npm run start
```
---

### Notes
Thanks for the assignment, it was fun to work with websockets.  I haven't worked with them and Vue together, so it was nice to learn.  I set myself an arbitrary time limit of 5 hours, my time this week is severely limited (How the busiest time of my year is in an isolation quarantine, I don't know). If there is anything you'd like to request feel free to open an issue.

I decided not to chart either the SoC or the odometer, because without historical data, I struggle to see any value in charting the information.  I charted the Energy Consumption and Speed over a slice of time, instead of just showing the cumulative data, as that would lead to results based on how long your browser was left open.

I added a little bit in the server to see if they were going faster than 45.  A real quick one.

Stuff I didn't do to save time: 
* Testing
* Error Handling
* Routing
* Performance optimisation
* Normally on Vue Projects I use separate scss files and BEM, but this was small enough just SFC and scoped css would suffice.
* SSR



