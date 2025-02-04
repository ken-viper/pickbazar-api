import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { CouponsService } from "./coupons.service";
import {
  CreateCouponDto,
  GetCouponsDto,
  UpdateCouponDto,
} from "./dto/coupon.dto";

@Controller("coupons")
export class CouponsController {
  constructor(private readonly couponsService: CouponsService) {}

  @Post()
  createCoupon(@Body() createCouponDto: CreateCouponDto) {
    return this.couponsService.create(createCouponDto); 
  }

  @Get()
  getCoupons(@Query() query: GetCouponsDto) {
    return this.couponsService.getCoupons(query);
  }

  @Get(":param")
  getCoupon(
    @Param("param") param: string,
    @Query("language") language: string,
  ) {
    return this.couponsService.getCoupon(param, language);
  }

  @Get(":id/verify")
  verify(@Param("param") param: string, @Query("language") language: string) {
    return this.couponsService.getCoupon(param, language);
  }

  @Post("verify")
  verifyCoupon(@Body("code") code: string) {
    return this.couponsService.verifyCoupon(code);
  }

  @Put(":id")
  updateCoupon(
    @Param("id") id: string,
    @Body() updateCouponDto: UpdateCouponDto,
  ) {
    return this.couponsService.update(+id, updateCouponDto);
  }

  @Delete(":id")
  deleteCoupon(@Param("id") id: string) {
    return this.couponsService.remove(+id);
  }
}
