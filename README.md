<div style="text-align: center;">
        <h1 align="center">Documentation</h1>
</div>


<div id="header" align="center">
  <img src="https://github.com/anasjawed283/verilogvizualizer.github.io/blob/main/readmeimg.png"/>
</div>

<h2><b>Software Requirements Specification for Verilog to state Diagram Converter Web Application</b></h2>
<!--------------------------------------->

> [!NOTE]
> - [x] Version 1.0 <br>
> - [ ] Version 1.1 <br>
> - [ ] Build Date - October 2023



<h2>1. Introduction</h2>



☐ 1.1	Purpose
> The purpose of this document is to provide a detailed description of the software requirements for the "Verilog to State Diagram Converter Web Application." It outlines the scope of the project, its features, and the necessary constraints.

☐ 1.2	Scope
> This document covers the requirements for the development of a web application that converts Verilog code into state diagrams, visualizing the state machines within the code. It includes functional and non-functional aspects and specifies the intended audience and references for the project.

☐ 1.3	Document Conventions
>This document follows industry-standard document conventions and uses the IEEE 830-1998 template for software requirements specifications.


☐ 1.4	Intended Audience
>The intended audience for this document includes project stakeholders, the development team, quality assurance team, and any other parties involved in the project.

☐ 1.5	References
>IEEE Std 830-1998, "IEEE Recommended Practice for Software Requirements Specifications."



<h2>2. Overall Description</h2>

☐ 2.1	Product Perspective
>The "Verilog to State Diagram Converter Web Application" is a standalone tool designed to convert Verilog code into visual state diagrams. It does not interact with other software systems.

☐ 2.2	Product Functions
>The primary functions of the application include Verilog parsing, state machine identification, graph representation, state diagram generation, interactive visualization, and the ability to display state details.


☐ 2.3	User Classes and Characteristics
>The users of this application include digital hardware designers and engineers. Users are expected to have a basic understanding of Verilog and state machines

☐ 2.4	Operating Environment
>The application will run as a web-based tool and is compatible with modern web browsers (e.g., Google Chrome, Firefox, and Microsoft Edge).

☐ 2.5	Design and Implementation Constraints
>The application must be developed using web technologies, ensuring cross-browser compatibility and responsiveness. It should handle Verilog code within defined size limits.

☐ 2.6	User Documentation
>User documentation will include a user manual with instructions on how to use the application, as well as explanations of the state diagrams.

☐ 2.7	Assumptions and Dependencies
>The application assumes that users will provide valid Verilog code.



<h2> 3. System Features</h2>

☐ 3.1	Verilog Parsing
> ☐ 3.1.1	Description
>>The application will parse Verilog code to extract module definitions, signals, state machines, and state transition logic.

> ☐ 3.1.2	Priority
>>High

>☐ 3.1.3	Pre-Conditions
>> Valid Verilog code is provided as input.

>☐ 3.1.4	Post-Conditions
>> Parsed Verilog data is available for further processing.

>☐ 3.1.5	Functional Requirements
>> The application should accept Verilog code as input. It should analyse the code to extract module definitions, signals, and state machines.

☐ 3.2	State Machine Identification
> ☐ 3.2.1	Description
>>The application will identify state machines within the parsed Verilog code based on predefined criteria.

> ☐ 3.2.2	Priority
>>High

>☐ 3.2.3	Pre-Conditions
>> Parsed Verilog data is available.

>☐ 3.2.4	Post-Conditions
>> Identified state machines are marked for graph representation.

>☐ 3.2.5	Functional Requirements
>> The application should use predefined criteria to identify state machines. It should tag identified state machines for further processing.

☐ 3.3	Graph Representation
> ☐ 3.3.1	Description
>>The application will represent identified state machines as graphs, with states as nodes and transitions as edges.

> ☐ 3.3.2	Priority
>>High

>☐ 3.3.3	Pre-Conditions
>> Identified state machines are tagged.

>☐ 3.3.4	Post-Conditions
>> State machines are represented as graphs.

>☐ 3.3.5	Functional Requirements
>> The application should use a graph library to create a graphical representation of state machines. States should be represented as nodes, and state transitions as edges in the graph.



☐ 3.4	State Diagram Generation
> ☐ 3.4.1	Description
>>The application will represent identified state machines as graphs, with states as nodes and transitions as edges.

> ☐ 3.4.2	Priority
>>High

>☐ 3.4.3	Pre-Conditions
>> Identified state machines are tagged.

>☐ 3.4.4	Post-Conditions
>> State machines are represented as graphs.

>☐ 3.4.5	Functional Requirements
>> The application should use a graph library to create a graphical representation of state machines. States should be represented as nodes, and state transitions as edges in the graph.



☐ 3.5	Interactive Visualization

> ☐ 3.5.1 Description
>>The application will provide interactive visualization of state diagrams, allowing users to click on nodes and explore details.

> ☐ 3.5.2 Priority
>>Medium

> ☐ 3.5.3 Pre-Conditions
>>State diagrams are generated.

> ☐ 3.5.4 Post-Conditions
>>Interactive state diagrams are available for user interaction.

> ☐ 3.5.5 Functional Requirements
>>The application should use web technologies (e.g., D3.js) for interactive visualization. Users should be able to click on nodes to explore state details.




☐ 3.6	Display State Details

>☐ 3.6.1 Description
>>The application will display details of individual states when a user clicks on a node in the state diagram.

>☐ 3.6.2 Priority
>>Medium

>☐ 3.6.3 Pre-Conditions
>>Interactive state diagrams are displayed.

>☐ 3.6.4 Post-Conditions
>>State details are shown in response to user clicks.

>☐ 3.6.5 Functional Requirements
>>The application should provide a mechanism to display state details upon clicking a state node. State details should include information about state behavior.




☐ 3.7	Testing and Validation

>☐ 3.7.1 Description
>>The application should include testing and validation features to ensure accurate conversion and visualization.

>☐ 3.7.2 Priority
>>High

>☐ 3.7.3 Pre-Conditions
>>Verilog parsing and graph representation are complete.

>☐ 3.7.4 Post-Conditions
>>Test results and validation reports are available.

>☐ 3.7.5 Functional Requirements
>>The application should include test cases to validate the conversion and visualization process. Validation reports should be generated and made available to users.

☐ 3.8 Documentation and User Interface
>☐ 3.8.1 Description
>>The application should provide user documentation and a user-friendly interface.

>☐ 3.8.2 Priority
>>Medium

>☐ 3.8.3 Pre-Conditions
>>The application is operational.

>☐ 3.8.4 Post-Conditions
>>User documentation and interface are available.

>☐ 3.8.5 Functional Requirements
>>User documentation should include a user manual with instructions. The user interface should be intuitive and user-friendly.




<h2>4. External Interface Requirements</h2>


☐1.	User Interfaces

☐2.	Hardware Interfaces

☐3.	Software Interfaces

☐4.	Communication Interfaces

<h2>5. Non-Functional Requirements</h2>

☐1.	Performance Requirements

☐2.	Security Requirements

☐3.	Availability

☐4.	Maintainability

☐5.	Scalability

☐6.	Usability

☐7.	Legal and Compliance


<h2>6. Other Requirements </h2>

☐1.	Web Server Integration

☐2.	Usability Testing

☐3.	Maintenance Updates


<h2>7. Appendices </h2>
☐1.	Glossary

☐2.	Mockups and Wireframes


