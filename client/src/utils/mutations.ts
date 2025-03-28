import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

// todo: where is theUserInput coming from? 11/17
export const ADD_USER = gql`
    mutation AddUser($input: UserInput!) {
  addUser(input: $input) {
    token
    user {
      _id
      username
      email
    }
  }
}

`;

// todo: do we add the _id or not. Maybe not bc its the solution the problem
export const SAVE_NEW_CARD = gql`
    mutation AddCardToUser($input: CardInput) {
  addCardToUser(input: $input) {
    _id
    name
    type
    description
    atk
    def
    level
    attribute
    race
    archetype
    image
  }
}
`;

export const ADD_CARD_TO_DECK = gql`
    mutation AddCardToDeck($deckId: String!, $cardId: String!) {
  addCardToDeck(deckId: $deckId, cardId: $cardId) {
    _id
    name
    playable
    cards {
      _id
    }
    type
    user
  }
}
`;

export const CREATE_NEW_DECK = gql`
    mutation CreateDeck($input: DeckInput) {
  createDeck(input: $input) {
    _id
    name
    playable
    cards {
      _id
    }
    type
    user
  }
}
`;

// export const REMOVE_CARD_FROM_DECK = gql `
//     mutation deleteCardFromDeck ($deckId: String!, $cardId: String!) {
//         removeCardFromDeck (deckId: $deckId, cardId: $cardId) {
//             name
//             playable
//             cards
//             type
//         }
//     }
// `;

export const UPDATE_DECK_DETAILS = gql`
    mutation UpdateDeckName($deckId: String!, $input: DeckInput) {
  updateDeckName(deckId: $deckId, input: $input) {
    _id
    name
    playable
    cards {
      _id
    }
    type
  }
}
`;

export const DELETE_CARD_FROM_USER = gql`
mutation DeleteCardFromUser($cardId: ID!) {
  deleteCardFromUser(cardId: $cardId) {
    _id
    username
    savedCards {
      _id
      name
      type
      description
      atk
      def
      level
      attribute
      race
      archetype
      image
    }
    allDecks {
      _id
      name
      playable
      cards {
        _id
      }
      type
      user
    }
  }
}
`;

export const DELETE_DECK = gql`
mutation DeleteDeck($deckId: ID!) {
  deleteDeck(deckId: $deckId) {
    _id
    username
    allDecks {
      _id
      name
      playable
      cards {
        _id
      }
      type
      user
    }
  }
}
`;

export const searchYuGiOhCard = (cardProperty: string, cardInfo: string) => {
  return fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${cardProperty}=${cardInfo}`);
};
