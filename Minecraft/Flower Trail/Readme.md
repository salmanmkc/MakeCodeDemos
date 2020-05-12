

# Flower Trail
In this program we are going to make a flower trail that follows you wherever you walk!
![Flower trail](/Assets/Minecraft/Flower%20Trail/Flower%20Trail%20Example.png)

## Step 1
Launch the code editor by pressing C on your keyboard and create a new project.
![Create a new project](/Assets/Minecraft/Flower%20Trail/New%20Project.png)

## Step 2
Navigate to 'Player' on the side panel (1) and find 'on player walk' and then drag it into the code window
![On player walk](/Assets/Minecraft/Flower%20Trail/Player%20Walk.png)

 ## Step 3
Navigate to 'Blocks' on the side panel (1) and find 'place *grass block* at ~0 ~0 ~0' and then drag inside your 'on player walk' block
![Place Blocks](/Assets/Minecraft/Flower%20Trail/Blocks%20Place.png)

 ## Step 4
 Change the *grass block* to be a Dandelion. It should look like below. You can now walk around and then look behind you to see if you should have a trail of dandelions following you. If you walk backwards you should be able to see them appearing infront of you.</br>
![Code snippet 1](/Assets/Minecraft/Flower%20Trail/Code%20Snippet%201.png)

 ## Step 5
 You can copy and paste the same code block with control c, control v and then place it below the previous 'place' block, but change the flower to be a Oxeye Daisy instead.
![Code snippet 2](/Assets/Minecraft/Flower%20Trail/Code%20Snippet%202.png)

## Step 6
Repeat step 5, but now choose a flower of your choice, e.g. Blue Orchid. Then try walk around and you will see the same trail.
![Code snippet 3](/Assets/Minecraft/Flower%20Trail/Code%20Snippet%203.png)

## Step 7
If you walk around you'll notice that not all flowers are placed, it does it randomly.
You can change this by giving an offset on the x axis.
Set the first value of the first place block to be 1 and set the first value of the final place block to be -1
![Code snippet 4](/Assets/Minecraft/Flower%20Trail/Code%20Snippet%203.png)

## Step 8
Walk around and you should see a row of all flowers following you!
![Final output](/Assets/Minecraft/Flower%20Trail/Final%20Output.png)

## Optional Experiment
Try change the movement type from walk!

## Python Code
    def travelled_walk():
	    blocks.place(YELLOW_FLOWER, pos(1,  0,  0))
	    blocks.place(OXEYE_DAISY, pos(0,  0,  0))
	    blocks.place(BLUE_ORCHID, pos(-1,  0,  0))
    player.on_travelled(WALK, travelled_walk)

## JavaScript Code
    player.onTravelled(WALK,  function  ()  {
		blocks.place(YELLOW_FLOWER, pos(1,  0,  0))
		blocks.place(OXEYE_DAISY, pos(0,  0,  0))
		blocks.place(BLUE_ORCHID, pos(-1,  0,  0))
	})