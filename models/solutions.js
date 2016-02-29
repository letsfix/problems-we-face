/*

A solution is something a user suggests to resolve a problem.

It could be donating to a cause, pushing for legislative action, joining a volunteer group, changing individual behavior.

It would be good if solutions linked to more information.

Individual solutions can be endorsed and opposed by users.


// Attributes
- author_user_id
- name, text max 140 characters
- description, text
- problem_id
- created, Date

// Virtuals
- Count endorsements
- Count oppositions
- View questions & answers

// Methods
- Endorse solution (optional explanation)
- Oppose solution (optional explanation)
- Question solution
  - neutral, not tied to endorsement or opposition, just asking for clarification
  - author can respond to these
  - other users can suggest answers, that author can choose to adopt


*/
