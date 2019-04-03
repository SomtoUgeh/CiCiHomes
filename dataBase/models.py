from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()


# Table for Users
class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    email = Column(String(250), nullable=False)
    image = Column(String(250))

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'name': self.name,
            'id': self.id,
            'email': self.email,
        }


# Table for different sport categories
class Houses(Base):
    __tablename__ = 'houses'

    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    user_id = Column(Integer, ForeignKey('user.id'))
    user = relationship(User)
    sport_item = relationship('Houses', cascade='all, delete-orphan')
    # This last line makes it possible to delete an entry and have it deleted in all relations in the DB

    @property
    def serialize(self):
        # Return object data in easily serializable format
        return {
            'name': self.name,
            'id': self.id,
        }


# Table for the sports equipments
class HousesItem(Base):
    __tablename__ = 'house_item'

    name = Column(String(80), nullable=False)
    id = Column(Integer, primary_key=True)
    description = Column(String(250))
    sport_id = Column(Integer, ForeignKey('house.id'))
    sport = relationship(Sport)
    user_id = Column(Integer, ForeignKey('house.id'))
    user = relationship(User)

    @property
    def serialize(self):
        # Return object data in easily serializable format
        return {
            'description': self.description,
            'name': self.name,
            'id': self.id,
        }


engine = create_engine('sqlite:///sportcategory.db')
Base.metadata.create_all(engine)
