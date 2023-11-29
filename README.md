# MicroFrontends-
<h3>Micro frontend:</h3>
<h5>Monolith frontend Architecture :</h5>
in monolith architecture browser communicates with the frontend application ,backend and database here are components are tightly coupled
so any change in one component affects the other
        monolith                                                                                 micro Frontend
->scaling is difficult    
->here single application is responsible for working with data                      -> in Microfrontend architecture web browser communicates with micro frontend
  coming from 3 services                                                                  shell which is responsible for loading and managing 

										                                                                  -> here each of them communicates with its service for its needs

										                                                                 ->so here single owner is not responsible for any change in the FE App

**steps for Micro Frontend Architecture

1.identify different parts of the front-end application that can be divided into smaller independent parts
2.deciding on a common framework and language for developing micro fontend
3.Implement a shell application or orchestrator to load and manage microphone frontends
	shell application: is something that acts like a container micro frontend handling tasks like
	i.routing 
	ii.communication between components
	iii.rendering the appropriate interfaces based on any user interactions
	"shell application" is a central piece that brings together and orchestrates the different microfrontends. 
	The shell application is responsible for managing the overall layout, navigation, and coordination between 
	the independently developed microfrontend modules.
	key aspects of a shell application in a microfrontend architecture:
			1.Layout and Structure: 		2.Navigation
			3.Communication and Coordination	4.Integration of Microfrontends
			5.Shared Services			6.Centralized Configuration:		7.State Management

4.deciding a strategy to bundle and deploy micro frontends
5.implementing a testing strategy that ensures each micro frontend can be tested both in isolation and as a part of the larger application


implementation:
--> create 2 applications  i.shell-frontend-application    ii.micro frontend-application 
