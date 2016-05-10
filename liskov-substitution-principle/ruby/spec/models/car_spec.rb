require "spec_helper"
require_relative "../../models/car"

RSpec.describe Car do
  describe "#turn_on_ac" do
    it "should output Whew it's chilly..." do
      allow($stdout).to receive(:puts)
      car = Car.new
      car.turn_on_ac

      expect($stdout).to have_received(:puts).with("Whew it's chilly...")
    end
  end
end
