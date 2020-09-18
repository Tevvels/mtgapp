const router = require("express").Router();
let Card = require("../models/card.model");

router.route('/').get((req,res)=>{
	Card.find()
		.then(card => res.json(card))
		.catch(err => res.status(400).json("Error" + err));

});

router.route('/add').post((req,res)=>{
	const cardName = req.body.cardName;
	const cardCost = req.body.cardCost;
	const cardType = req.body.cardType;
	const cardSet = req.body.cardSet;
	const cardDesc = req.body.cardDesc;
	const cardImage = req.body.cardImage;
	const newCard = new Card({
		cardName,
		cardCost,
		cardType,
		cardSet,
		cardDesc,
		cardImage,
	});

	newCard.save()
			.then(()=> res.json("Card Entered"))
			.catch(err => res.status(400).json("Error" + err));
		
});


router.route('/:id').get((req,res)=> {
	Card.findById(req.params.id)
		.then(card => res.json('Card'))
		.catch(err => res.status(400).json("Error" + err));

});
router.route('/:id').delete((req,res)=>{
	Card.findByIdAndDelete(req.params.id)
		.then(card => res.json('Card Removed'))
		.catch(err => res.status(400).json("Error" + err));

});
router.route('/update/:id').post((res,req)=>{
	Card.findById(req.params.id)
		.then(card =>{
			card.cardName = req.body.cardName;
			card.cardCost = req.body.cardCost;
			card.cardSet = req.body.cardSet;
			card.cardType = req.body.cardType;
			card.cardDesc = req.body.cardDesc;
			card.cardImage = req.body.cardImage;
			card.save()
				.then(()=> res.json('Card Updated'))
				.catch(err => res.status(400).json("Error" + err));
		
		})
		.catch(err => res.status(400).json("Error" + err));

});

module.exports = router;


