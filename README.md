Generative Element (Continuous Motion)

Descriptive Report

Description of the Generative Element
For the second part of the assignment, the chosen generative/dynamic element is the horizontal translation of the red rectangle located in the top-left corner of the composition. The shape moves continuously to the right along the X-axis, seamlessly looping back from the left side once it exits the canvas.

Technical Implementation
- Translation: The movement is achieved using push(), pop(), and translate(xOffset, 0) applied specifically to the red rectangle's drawing code.
- Position Update: On every frame, the xOffset variable increments by 0.5 pixels (xOffset += 0.5), producing a smooth motion.
- Continuous Loop: A conditional check (if (xOffset > width)) resets xOffset to -350 (the rectangle's width) as soon as it leaves the right edge of the canvas, ensuring an infinite, seamless animation loop.

Rationale and Concept
Moving the red block deconstructs the static rigidity of Mondrian's grid. As the most visually dominant element in the composition, the red shape breaks free from its fixed position to explore the canvas, turning a classic, motionless artwork into a dynamic and constantly evolving visual experience.
