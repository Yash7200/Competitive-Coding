//r --> rank
//1 to 50 rank --> 100% scholarship
//51 to 100 rank --> 50% scholarship
//everyone else --> nothing
#include <stdio.h>
int main(void)
{
    int r;
    scanf("%d",&r);
    if(r>0 && r<51)
    {
        printf("100\n");
    }
    else if(r>50 && r<101)
    {
        printf("50\n");
    }
    else
    {
        printf("0\n");
    }
	return 0;
}