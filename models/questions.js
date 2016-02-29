/*
Questions
  - Could be asked of a problem or a solution
  - neutral, not tied to endorsement or opposition, just asking for clarification
  - author can respond to these
  - other users can suggest answers, that author can choose to adopt

Attributes:
  - type: ENUM ["PROBLEM", "SOLUTION"]
  - target_id: foreign key pointing to the problem or solution
  - text
  - author_user_id
  - created Date

Methods:
  - Other users can 'repeat' a question (e.g. second the question, upvote it)
  - Original user can withdraw a question (but if other users second'ed it, theirs remains)


*/
