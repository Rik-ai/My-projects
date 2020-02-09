// arguments & parameter

const speak = function (name = 'ivan', time = 'night') {
    console.log(`good ${time} ${name}`);

};


speak();
speak('shaun', 'day');