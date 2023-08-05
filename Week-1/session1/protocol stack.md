## Protocol Stack
Protocol stack can be explained as we have a set of protocols which will work together for the communication and data being exchanged between two devices or applications in the network.

There are layers in the protocol stack where each layer  is responsible for its own functionality and service, each layer functions on the top of its below layer in the stack.

Below layer sequence is followed when the response is getting back from the server to clinet .
We can use the reverse order sequenmce when we are requesting the data from clinet to server.
All the  protocols and functionalities will remain same in both the above cases.

# Layers
- Physical Layer 
- Data Link Layer
- Network Layerr
- Transport Layer
- Application Layer

### Physical Layer
- It will receive the electrical/optical signals and convert that signals to the frames.

### Data Link Layer 
- It is responsible  for the local network communication.
- It receives the frames from the physical layer and prrocess the frames.
- Data link layer will check destination ip address of each frame to  confirm if the frame needs to process and communicated between local network. 
- If frame does not belong to local network it will pass the frame to next hop (next layer).

### Network Layer
- The Network Layer is responsible for logical addressing and routing of data between different networks
- This layer is responsible to determine the shortest path to the destination Ip address.
- It receives the packet from the data link layer and determines  if it belongs to current network else it will find the next shortest network to be forwaded and pass the packet to that network.


### Transport Layer
- This layer is responsible for end to end communication between devices 
- This layer receives the packed from the network layer and process it  furthur like segmentation or reassembly may occur.
- This layer ensures the reliability and sequence of the packets sent to destination.

### Application Layer
- Application Layer is the nearest lasyer to the end user or application.
- It is responsible to provide the network services (ftp,http,https,smtp) to the application or end useer.

# How Protocol stack  is used in Web Development

- protocol stack plays a crucial role in web development for estabilishing and exchanging the data between two devices and applications.
- Without protocols stack it is not possible to transfer the data between two devices in an efficient way.
- Protocol stack helps to get the picture of in the complex network world with lot of protocols how we organize all of them in such a way to  transfer the data from  source to destination.




