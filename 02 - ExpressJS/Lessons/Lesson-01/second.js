app.post('/', (req, res) => {
  res.send('Posting some data....');
  res.end();
});

app.put('/', (req, res) => {
  res.send('Updating some data....');
  res.end();
});

app.delete('/', (req, res) => {
  res.send('Deleting some data....');
  res.end();
});
