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
        string switch
    }
    Food ||--o| Timeset : click
    Timeset {
       string[] day
       int time
       int minute
       int food
    }
```