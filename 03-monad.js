panda = Functor.of('🐼')
addTigrouBuddy = (me) => Functor.of(me + '🐯')
buddies = panda.map(addTigrouBuddy)

panda = Monad.of('🐼')
addTigrouBuddy = (me) => Monad.of(me + '🐯')
buddies = panda.fmap(addTigrouBuddy)
fullOfBuddies = panda
  .fmap(addTigrouBuddy)
  .fmap(addTigrouBuddy)
  .fmap(addTigrouBuddy)
  .fmap(addTigrouBuddy)
