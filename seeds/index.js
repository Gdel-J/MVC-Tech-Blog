const sequelize = require("../config/connection")
const {User,Blog,Comment} = require("../models")

const users = [
    {
        username: "Terraone",
        password: "123456wx"
    },
    {
        username: "Jupitertwo",
        password: "123456wx"
    },
    {
        username: "Neptunethree",
        password: "123456wx"
    },

]

const blogs = [
    {
        title: "The Milky Way",
        content: "The Milky Way is a disk that measures about 120,000 light years across, with a central bulge that has a diameter of about 12,000 light years. The disk is not perfectly flat though, it is warped due to our neighboring galaxies Large and Small Magellanic clouds. These two galaxies have been pulling on the matter in our galaxy like a game of tug-of-war.",
        userId: 1
    },
    {
        title: "There is a black hole at the center",
        content: "Like most larger galaxies, the Milky Way has a supermassive black hole at its center called Sagittarius A*. This black hole has an estimated diameter of 14 million miles, which does not include the disk of mass being drawn into it. This outer disk has about 14.6 million times the mass of our Sun in what would be similar to the orbit of the Earth!",
        userId: 1
    },
    {
        title: "HasMany: It has over 200 billion stars ",
        content: "The Milky Way is only a medium sized galaxy with an estimated 200 billion stars. The largest galaxy we know of is called IC 1101 and has over 100 trillion stars.",
        userId: 2
    },
    {
        title: "BelongsTo:It’s part of the Virgo Supercluster",
        content: "It is a group of galaxies within 150 million light years.The Virgo Supercluster contains at least 100 galaxy groups and clusters, and is about 110 million light-years in diameter. A 2014 study shows that the Virgo Supercluster is only one lobe of a greater supercluster called Laniakea.",
        userId: 3
    },
]

const comments = [
    {
        body: "WOW!",
        blogId: 1,
        userId: 1
    },
    {
        body: "That's Huge!",
        blogId: 3,
        userId: 2
    },
    {
        body: "Impressive!",
        blogId: 4,
        userId: 1
    },
    {
        body: "Is there a movie called Look up the stars?",
        blogId: 2,
        userId: 3
    },

];
   
const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Blog.bulkCreate(blogs);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()