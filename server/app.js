import express from "express"; 
import { cars } from "./schema.js";
import { db } from "./db.js";

const app = express(); 
app.use(express.json()); 

const port = 3000; 

const router = express.Router(); 

// let cars = [
//   { id: 1, make: "Toyota", model: "Camry", year: 2020 },
//   { id: 2, make: "Honda", model: "Civic", year: 2019 },
//   { id: 3, make: "Ford", model: "Mustang", year: 2021 }
// ]



router.get('/', async (req, res) => { 
  const response = await db.select().from(cars); 
    res.status(200).json(response);
});


router.get('/:id', async (req, res) => { 
  const response = await db.select().from(cars).where(cars.id === parseInt(req.params.id)); 
    if (!response) {
        return res.status(404).send({ message: "Car not found!" });
    }
    res.send(car);
}); 

router.post('/cars',async (req, res) => { 
  const { make, model, year, price } = req.body; 

  if (!make || !model || !year || !price) { 
    return res.status(400).json({ 
      error: "Make, model, year, and price are required fields!"
    }); 
  }

  const [ newCar ] = await db.insert(cars).values({ make, model, year, price}).returning(); 

  res.status(201).json(newCar); 
}); 

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = await db.delete(cars).where(cars.id.eq(id)).returning();
    if (deleted.length === 0) {
      return res.status(404).json({ error: "Car not found!" });
    }
    res.json({ message: "Car deleted successfully!" });
  });

app.use('/api/v1', router); 

app.listen(port, () => { 
  console.log(`Server is running on http://localhost:${port}`);
})