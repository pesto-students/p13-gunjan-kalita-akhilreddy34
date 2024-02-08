const getPersonalizedGreetingMessage = (userName) => {
  try {
    if (!userName || !userName?.length)
      throw new Error("please provide a valid user name");

    return `Dear ${userName}

        Greetings! We hope this message finds you well. On behalf of our team, we would like to extend a warm welcome to you.
        
        Your presence is valued, and we appreciate the opportunity to serve you. If there is anything we can assist you with, please do not hesitate to reach out.
        `;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getPersonalizedGreetingMessage,
};
