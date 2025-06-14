

export const featurecard = [
    {
        'id': 1,
        "image": "https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=980:*",
    },
    {
        'id': 2,
        "image": "https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=980:*",
    },
    {
        'id': 4,
        "image": "https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=980:*",
    },
    {
        'id': 5,
        "image": "https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=980:*",
    },
    {
        'id': 6,
        "image": "https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=980:*",
    },
    {
        'id': 7,
        "image": "https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=980:*",
    },
    {
        'id': 8,
        "image": "https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=980:*",
    },
    {
        'id': 9,
        "image": "https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=980:*",
    },
    {
        'id': 10,
        "image": "https://hips.hearstapps.com/hmg-prod/images/dahlia-1508785047.jpg?crop=1.00xw:0.669xh;0,0.0136xh&resize=980:*",
    },
];

const FeatureCard = ({ id, image }) => {
    return (
        <div key={id} className="w-full h-full overflow-auto">
            <img src={image}
                className="h-full"
                alt="" />
        </div>
    )
}

export default FeatureCard
