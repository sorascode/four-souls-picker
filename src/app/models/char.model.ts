export interface Char {
  id: number,
  front: string,
  back: string,
  item: string,
  itemBack: string,
  itemTappable: boolean,
  threePlus: boolean,
}

export const sets = ['Base Game V2', 'Gold Box V2', 'Four Souls+ V2', 'Requiem', 'Requiem Warp Zone', 'Tapeworm'];

export const charsBySet: { [set: typeof sets[number]]: Char[] } = {
  'Base Game V2': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-isaac.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-the_d6.png',
      itemBack: 'none',
      itemTappable: true,
      id: 1,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-maggy.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-yum_heart.png',
      itemBack: 'none',
      itemTappable: true,
      id: 2,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-cain.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-sleight_of_hand.png',
      itemBack: 'none',
      itemTappable: true,
      id: 3,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-judas.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-book_of_belial.png',
      itemBack: 'none',
      itemTappable: true,
      id: 4,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-blue_baby.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-forever_alone.png',
      itemBack: 'none',
      itemTappable: true,
      id: 5,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-eve.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-the_curse.png',
      itemBack: 'none',
      itemTappable: true,
      id: 6,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-samson.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-blood_lust.png',
      itemBack: 'none',
      itemTappable: true,
      id: 7,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-lazarus.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-lazarus_rags.png',
      itemBack: 'none',
      itemTappable: false,
      id: 8,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-lilith.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-incubus.png',
      itemBack: 'none',
      itemTappable: true,
      id: 9,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-the_forgotten.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/b2-the_bone.png',
      itemBack: 'none',
      itemTappable: true,
      id: 10,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/b2-eden.png',
      back: 'none',
      item: 'none',
      itemBack: 'none',
      itemTappable: false,
      id: 11,
      threePlus: false
    }
  ],
  'Gold Box V2': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/g2-azazel.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/g2-lord_of_the_pit.png',
      itemBack: 'none',
      itemTappable: true,
      id: 12,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/g2-the_lost.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/g2-holy_mantle.png',
      itemBack: 'none',
      itemTappable: true,
      id: 13,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/g2-the_keeper.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/g2-wooden_nickel.png',
      itemBack: 'none',
      itemTappable: true,
      id: 14,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/g2-apollyon.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/g2-void.png',
      itemBack: 'none',
      itemTappable: true,
      id: 15,
      threePlus: false
    }
  ],
  'Four Souls+ V2': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-bum_bo.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-bag_o_trash.png',
      itemBack: 'none',
      itemTappable: false,
      id: 16,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-dark_judas.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-dark_arts.png',
      itemBack: 'none',
      itemTappable: false,
      id: 17,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-guppy.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-infestation.png',
      itemBack: 'none',
      itemTappable: true,
      id: 18,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-whore_of_babylon.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/fsp2-gimpy.png',
      itemBack: 'none',
      itemTappable: false,
      id: 19,
      threePlus: false
    }
  ],
  'Requiem': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-bethany.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-book_of_virtues.png',
      itemBack: 'none',
      itemTappable: false,
      id: 20,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-jacob_and_esau.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-sibling_rivalry.png',
      itemBack: 'none',
      itemTappable: true,
      id: 21,
      threePlus: true
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_broken.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-spindown_dice.png',
      itemBack: 'none',
      itemTappable: true,
      id: 22,
      threePlus: true
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_dauntless.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-hypercoagulation.png',
      itemBack: 'none',
      itemTappable: false,
      id: 23,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_hoarder.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-bag_of_crafting.png',
      itemBack: 'none',
      itemTappable: false,
      id: 24,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_deceiver.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-ceremonial_blade.png',
      itemBack: 'none',
      itemTappable: true,
      id: 25,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_soiled.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-ibs.png',
      itemBack: 'none',
      itemTappable: false,
      id: 26,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_curdled.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-sumptorium.png',
      itemBack: 'none',
      itemTappable: false,
      id: 27,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_savage.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-berserk.png',
      itemBack: 'none',
      itemTappable: false,
      id: 28,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_benighted.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-hemoptysis.png',
      itemBack: 'none',
      itemTappable: true,
      id: 29,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_enigma.png',
      back: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_enigma_back.png',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-flip.png',
      itemBack: 'none',
      itemTappable: false,
      id: 30,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_capricious.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-glitch.png',
      itemBack: 'none',
      itemTappable: true,
      id: 31,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_baleful.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-soulbond.png',
      itemBack: 'none',
      itemTappable: false,
      id: 32,
      threePlus: true
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_harlot.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-gello.png',
      itemBack: 'none',
      itemTappable: true,
      id: 33,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_miser.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-keepers_bargain.png',
      itemBack: 'none',
      itemTappable: true,
      id: 34,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_empty.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-abyss.png',
      itemBack: 'none',
      itemTappable: true,
      id: 35,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_fettered.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-dead_weight.png',
      itemBack: 'none',
      itemTappable: true,
      id: 36,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_zealot.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-lemegeton.png',
      itemBack: 'none',
      itemTappable: true,
      id: 37,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_deserter.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-anima_sola.png',
      itemBack: 'https://foursouls.com/wp-content/uploads/2022/01/r-the_revenant.png',
      itemTappable: true,
      id: 38,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/r-flash_isaac.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/r-classic_roller.png',
      itemBack: 'none',
      itemTappable: true,
      id: 39,
      threePlus: true
    }
  ],
  'Requiem Warp Zone': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-ash.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-ball_of_tumors.png',
      itemBack: 'none',
      itemTappable: false,
      id: 40,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-steven.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-lil_steven.png',
      itemBack: 'none',
      itemTappable: false,
      id: 41,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-bum_bo_the_weird.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-strange_marble.png',
      itemBack: 'none',
      itemTappable: false,
      id: 42,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-edmund.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-the_real_left_hand.png',
      itemBack: 'none',
      itemTappable: true,
      id: 43,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-abe.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-possession.png',
      itemBack: 'none',
      itemTappable: false,
      id: 44,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-baba.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-is_you.png',
      itemBack: 'none',
      itemTappable: true,
      id: 45,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-blind_johnny.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-johnnys_knives.png',
      itemBack: 'none',
      itemTappable: true,
      id: 46,
      threePlus: true
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-blue_archer.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-bow_and_arrow.png',
      itemBack: 'none',
      itemTappable: true,
      id: 47,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-boyfriend.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-girlfriend.png',
      itemBack: 'none',
      itemTappable: true,
      id: 48,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-captain_viridian.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-gravity.png',
      itemBack: 'none',
      itemTappable: true,
      id: 49,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-crewmate.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-emergency_meeting.png',
      itemBack: 'none',
      itemTappable: true,
      id: 50,
      threePlus: true
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-guy_spelunky.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-spelunking_pack.png',
      itemBack: 'none',
      itemTappable: false,
      id: 51,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-johnny.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-football.png',
      itemBack: 'none',
      itemTappable: true,
      id: 52,
      threePlus: true
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-pink_knight.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-lollypop.png',
      itemBack: 'none',
      itemTappable: false,
      id: 53,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-psycho_goreman.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-hunky_boys.png',
      itemBack: 'none',
      itemTappable: false,
      id: 54,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-quote.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-polar_star.png',
      itemBack: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-booster_v20.png',
      itemTappable: true,
      id: 55,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-salad_fingers.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-rusty_spoons.png',
      itemBack: 'none',
      itemTappable: true,
      id: 56,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-the_knight.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-focus.png',
      itemBack: 'none',
      itemTappable: false,
      id: 57,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-the_silent.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-ring_of_the_snake.png',
      itemBack: 'none',
      itemTappable: false,
      id: 58,
      threePlus: false
    },
    {
      front: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-yung_venuz.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2022/01/rwz-pop_pop.png',
      itemBack: 'none',
      itemTappable: true,
      id: 59,
      threePlus: false
    }
  ],
  'Tapeworm': [
    {
      front: 'https://foursouls.com/wp-content/uploads/2021/07/tw-tapeworm.png',
      back: 'none',
      item: 'https://foursouls.com/wp-content/uploads/2021/07/tw-pink_proglottid.png',
      itemBack: 'none',
      itemTappable: true,
      id: 60,
      threePlus: false
    }
  ]
}
