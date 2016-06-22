panda = Functor.of('🐼')
addTigrouBuddy = (me) => Functor.of(me + '🐯')
buddies = panda.map(addTigrouBuddy)

// -------------------------------

panda = Monad.of('🐼')
addTigrouBuddy = (me) => Monad.of(me + '🐯')
buddies = panda.bind(addTigrouBuddy)

// -------------------------------

fullOfBuddies = panda
  .bind(addTigrouBuddy)
  .bind(addTigrouBuddy)
  .bind(addTigrouBuddy)
  .bind(addTigrouBuddy)
