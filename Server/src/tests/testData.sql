INSERT INTO location (address, name, postcode) VALUES('adresse', 'etsted', 2020);
INSERT INTO event (name, image, start, end, status, is_public, location_id, venue) VALUES('Test event 1', 'status', '2025-1-29 14:56:59', '2025-10-29 14:56:59', '', 1, 1, 'etsted');
INSERT INTO event (name, image, start, end, status, is_public, location_id, venue) VALUES('Test event 2', 'status', '2025-1-29 15:56:59', '2025-10-29 14:56:59', '', 1, 1, 'etsted');
INSERT INTO event (name, image, start, end, status, is_public, location_id, venue) VALUES('Test event 3', 'status', '2025-1-29 16:56:59', '2025-10-29 14:56:59', '', 1, 1, 'etsted');
INSERT INTO event (name, image, start, end, status, is_public, location_id, venue) VALUES('Test event 3', 'status', '2025-1-29 16:56:59', '2025-10-29 14:56:59', '', 0, 1, 'etsted');
INSERT INTO organiser (organiser_email, name, hash, salt, verified) VALUES ('email@organisation.com', 'Lars kan ikke sql', '1', '1', 1);
INSERT INTO event_organiser (organiser_id, event_id) VALUES (1,1);
INSERT INTO ticket_type (name, description, organiser_id) VALUES ('ticket 1', 'the number 1 ticket', 1),('ticket 2','the second ticket',1);
INSERT INTO event_ticket (event_id, ticket_type_id) VALUES (3,1),(3,2);
INSERT INTO user (email) VALUES ('testuser@testemail.com');
INSERT INTO user (email) VALUES ('test@test.com');
INSERT INTO artist (user_id) VALUES (1);
INSERT INTO event_artist (user_id, event_id) VALUES (1, 1);
INSERT INTO volunteer_type (name, organiser_id) VALUES ('serf', 1);
INSERT INTO rider (rider_file, event_id, user_id) VALUES ('testfil.jpeggg', 1, 1);
INSERT INTO event_volunteer(user_id, event_id, volunteer_type_id) VALUES (1,1,1);