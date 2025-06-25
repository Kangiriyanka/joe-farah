---
layout: ../../layouts/ProjectPostLayout.astro
title: 'Grid Diary'
description: 'A React calendar designed for journaling'
stack: ["react", "flask"]
---



## Why?

I've been journaling for a long time. 


## Routes

This is how my routes are setup. Using the :parameters 

```jsx



<BrowserRouter>
  <Header />
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/404" element={<EmptyView />} />
    <Route
      exact
      path="/calendar/:year/:month"
      element={<Calendar />}
    />
    <Route
      exact
      path="/calendar/days/:year/:month/:day"
      element={<Day />}
    />
    <Route
      exact
      path="/calendar/days/:year/:month/:day/edit"
      element={<EditDay />}
    />
  </Routes>
</BrowserRouter>


```


## Calendar Components

The three main components I use:

- Calendar
- MonthGrid
- Square 


### Calendar


### Month Grid


### Square


The Square is a ink to my Day component.






## Flask and Blueprints



### SQLAlchemy


This is the model for my diary entry 

```python
# models.py
class DiaryEntry(db.Model):
    __tablename__ = "diary_entries"
    date = db.Column(db.Date,  primary_key= True )
    day_title = db.Column(db.String(100))
    day_content = db.Column(db.Text)
    
    def to_json(self):
        return {
            "date": self.date,
            "day_title": self.day_title,
            "day_content":  self.day_content
            
        }
    

```

Using CLI commands, I can create the database, populate it, and drop table(s).

```python
# cli.py
@bp.cli.command("populate-days")
def populate_days():
    """Populate the database with diary entries between 2000 and 2100"""
    start_date = START_DATE
    end_date = END_DATE
    current_date = start_date
    
    click.echo("Populating diary entries... ")
    
    
    while current_date <= end_date: 
        try: 
            new_entry = DiaryEntry(date= current_date, day_title = "default_title", day_content= "default_content")
            db.session.add(new_entry)
            current_date += timedelta(days=1)
            
        except Exception as e:
            click.echo(f"An exception has occured: {str(e)}")
        
        
    db.session.commit()
    click.echo("Succesfully added all the dates")



```