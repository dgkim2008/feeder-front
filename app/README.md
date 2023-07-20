```mermaid
  erDiagram
    User {
        string feederid 
    }
    User ||--o| PET : contain
    PET {
        string type
        string name
        float birth
        string gender
        float weight
        string neutered
        string calorie
        string weightchoice
    }
    User ||--o| Food : contain
    Food {
        string repeat
    }
    Food ||--o| Timeset : click
    Timeset {
       string[] day
       string repeat
       int time
       int minute
       int food
    }
```