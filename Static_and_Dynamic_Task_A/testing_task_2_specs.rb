require ('minitest/autorun')
require('minitest/rg')
require_relative('testing_task_2.rb')
require_relative('card.rb')

class CardGameTest < Minitest::Test

    def setup
      @card1 = Card.new("Hearts", 10)
      @card2 = Card.new("Clubs", 1)
      @cards = [@card1, @card2]
      @cardgame = CardGame.new
    end

    def test_card_ace
      result = @cardgame.check_for_ace(@card1)
      assert_equal(false, result)
    end

    def test_card_ace_true
      result = @cardgame.check_for_ace(@card2)
      assert_equal(true, result)
    end

    def test_high_card
      result = @cardgame.highest_card(@card1, @card2)
      assert_equal(@card1, result)
    end

    def test_cards_total
      result = CardGame.cards_total(@cards)
      assert_equal("You have a total of 11", result)
    end

end
