require "spec_helper"
require_relative "../../models/vehicle"
require_relative "../../models/car"

RSpec.describe Vehicle do
  describe "#start_engine" do
    it "should output VROOM~" do
      allow($stdout).to receive(:puts)
      vehicle = Vehicle.new
      vehicle.start_engine

      expect($stdout).to have_received(:puts).with("VROOM~")
    end
  end

  describe "#change_oil" do
    it "should output GLUG GLUG~" do
      allow($stdout).to receive(:puts)
      vehicle = Vehicle.new
      vehicle.change_oil

      expect($stdout).to have_received(:puts).with("GLUG GLUG~")
    end
  end
end

RSpec.describe Car do
  describe "#start_engine" do
    it "should output VROOM~" do
      allow($stdout).to receive(:puts)
      vehicle = Car.new
      vehicle.start_engine

      expect($stdout).to have_received(:puts).with("VROOM~")
    end
  end

  describe "#change_oil" do
    it "should output GLUG GLUG~" do
      allow($stdout).to receive(:puts)
      vehicle = Car.new
      vehicle.change_oil

      expect($stdout).to have_received(:puts).with("GLUG GLUG~")
    end
  end 
end
